const {AndroidConfig, withStringsXml} = require('@expo/config-plugins');

function withNewString(expoConfig) {
  return withStringsXml(expoConfig, modConfig => {
    modConfig.modResults = AndroidConfig.Strings.setStringItem(
      [
        {
          _: 'false',
          $: {
            name: 'checksum',
            translatable: 'false',
          },
        },
      ],
      modConfig.modResults,
    );
    return modConfig;
  });
}

module.exports = withNewString;
