async function hideProviderWindow() {
  const providerWindow = fin.Window.getCurrentSync();
  const platform = fin.Platform.getCurrentSync();
  await platform.on('platform-api-ready', () => providerWindow.hide());
}

async function launchMatrix() {
  const { matrixSnapshot: { windows } } = await fin.Application.getCurrentSync().getManifest();
  const appWin = await fin.Window.create(windows[0]);
  await appWin.on('closed', () => fin.Platform.getCurrentSync().quit());
  await appWin.focus();
}

async function init() {
  // this doesnt hide current window
  fin.me.hide();

  // this hides current window
  // await hideProviderWindow();
  
  await launchMatrix();

  await fin.Platform.init();
}

init();
