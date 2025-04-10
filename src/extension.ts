import * as vscode from 'vscode';
import * as log4js from 'log4js';
import { ZoweVsCodeExtension } from '@zowe/zowe-explorer-api';

export function activate(context: vscode.ExtensionContext) {

	const logger = log4js.getLogger();
	logger.level = "debug"; // default level is OFF - which means no logs at all.
	logger.debug("Some debug messages");
	ZoweVsCodeExtension.updateCredentials({}, ZoweVsCodeExtension.getZoweExplorerApi(
		'2.0.0-SNAPSHOT'
	));
	logger.debug("This will end up in the Zowe Explorer log");

}

// This method is called when your extension is deactivated
export function deactivate() { }
