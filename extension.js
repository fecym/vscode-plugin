// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
console.log('🚀 ~ file: extension.js ~ line 4 ~ vscode', vscode);

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // 当扩展被激活时，这行代码只会被执行一次
  console.log('Congratulations, your extension "fecym-plugin" is now active!');

  // commandId参数必须与package.json中的command字段匹配
  // 为命令绑定事件，输入命令时执行该函数
  let disposable = vscode.commands.registerCommand('fecym-plugin.helloWorld', function () {
    // 控制台输入 hello Word 执行这里的函数
    // 向用户展示一个消息框
    vscode.window.showInformationMessage('Hello World from first-plugin!');
  });
  // 事件入栈
  context.subscriptions.push(disposable);

  // 注册 fecym 命令
  let fecym = vscode.commands.registerCommand('fecym-plugin.fecym123', function () {
    vscode.window.showInformationMessage('欢迎来到对抗路');
  });
  console.log("🚀 ~ file: extension.js ~ line 30 ~ fecym ~ fecym", fecym)

  context.subscriptions.push(fecym);

}

// this method is called when your extension is deactivated
// 插件释放时执行
function deactivate() {
  console.log('插件释放');
}

module.exports = {
  activate,
  deactivate,
};
