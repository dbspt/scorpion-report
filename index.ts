import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";
import * as moment from "moment";
import layout from "./templates/layout";

interface IOptions {
  jsonFile: string;
  output: string;
}

export async function generate(options: IOptions) {
  if (!options) {
    throw new Error("Options need to be provided.");
  }

  if (!options.jsonFile) {
    throw new Error("A path which holds the JSON files should be provided.");
  }

  if (!options.output) {
    throw new Error(
      "An output path for the reports should be defined, no path was provided."
    );
  }

  const reportFile = path.resolve(__dirname, "..", "..", "..");

  const json = JSON.parse(
    fs
      .readFileSync(
        path.resolve(__dirname, reportFile, options.jsonFile),
        "utf-8"
      )
      .toString()
  );

  let report = [];

  json.map((feature, indexA: number) => {
    let scenarioArray = [];
    let reportStatus = "passed";
    feature.elements.map((scenario, indexB: number) => {
      let stepArray = [];
      let scenarioStatus = "passed";
      scenario.steps.map((step, indexC: number) => {
        if (step.result.status == "failed") {
          scenarioStatus = step.result.status;
          reportStatus = step.result.status;
        }

        if (step.result.status == "undefined") {
          if (scenarioStatus != "failed") {
            scenarioStatus = step.result.status;
            reportStatus = step.result.status;
          }
        }

        if (step.result.status == "skipped") {
          if (scenarioStatus != "failed" && scenarioStatus != "undefined") {
            scenarioStatus = step.result.status;
            reportStatus = step.result.status;
          }
        }

        if (step.keyword != "Before") {
          stepArray.push({
            name:
              step.keyword.trim() != "After"
                ? step.name
                : "Scenario completed successfully",
            keyword: step.keyword.trim(),
            status: step.result.status,
            duration: moment(step.result.duration / 1000000).format(
              "mm:ss.SSS"
            ),
            error_message: step.result.error_message,
            embeddings:
              step.embeddings != undefined
                ? `data:image/png;base64,${step.embeddings[0].data}`
                : undefined,
          });
        }
      });

      scenarioArray.push({
        id: scenario.id,
        name: scenario.name.trim(),
        description: scenario.description.trim(),
        keyword: scenario.keyword.trim(),
        status: scenarioStatus,
        steps: stepArray,
      });
    });

    report.push({
      id: feature.id,
      name: feature.name.trim(),
      description: feature.description.trim(),
      keyword: feature.keyword.trim(),
      status: reportStatus,
      time: moment().format("DD/MM/YY HH:mm:ss"),
      scenarios: scenarioArray,
    });
  });

  await fse.outputFile(
    path.resolve(reportFile, options.output),
    layout(report)
  );
}
