mergeInto(LibraryManager.library, {
  StartGame: function (userName) {
    window.dispatchReactUnityEvent("StartGame", UTF8ToString(userName));
  },
  EndGame: function (userName, escapeTime) {
    window.dispatchReactUnityEvent("EndGame", UTF8ToString(userName), UTF8ToString(escapeTime));
  },
});