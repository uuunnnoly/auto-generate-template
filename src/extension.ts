import * as vscode from 'vscode';
import * as fs from "fs";
import { generateFilesTemplate, ActionType } from './generate';

export function activate(context: vscode.ExtensionContext) {

	const showWarningNotificationWithActions = vscode.commands.registerCommand('showModalWithActions', async (uri) => {
		const actionList = [ActionType.Component, ActionType.Module, ActionType.Modal] as const;
		const selection = await vscode.window.showInformationMessage('Choose your component type:', { modal: true }, ...actionList);

		if (selection !== undefined) {
			writeFile(uri.fsPath, selection);
		}
	});

	context.subscriptions.push(showWarningNotificationWithActions);
}

const writeFile = (path: string, action: ActionType) => {
	if (!path) {
		path = vscode.window.activeTextEditor?.document.uri.fsPath ?? "";
	}

	const stats = fs.statSync(path);

	if (stats.isDirectory()) {
		const componentName = path.split('/').pop() || 'Test';
		const filesTemplate = generateFilesTemplate(action, componentName);
		filesTemplate.forEach(item => {
			fs.writeFileSync(`${path}/${item.fileName}`, item.template);
		});
	}
}

