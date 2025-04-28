import * as vscode from "vscode";
import { ZoweVsCodeExtension } from "@zowe/zowe-explorer-api";

export function activate(context: vscode.ExtensionContext) {
  const zeApi = ZoweVsCodeExtension.getZoweExplorerApi("2.0.0-SNAPSHOT");
  const defaultProfile = zeApi
    .getExplorerExtenderApi()
    .getProfilesCache()
    .getDefaultProfile();
  ZoweVsCodeExtension.updateCredentials({ profile: defaultProfile }, zeApi);
}

// This method is called when your extension is deactivated
export function deactivate() {}
