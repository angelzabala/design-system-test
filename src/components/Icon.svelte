<script>
  import iconFonts from '../icons/icons.json';

  export let description = '';
  export let color = '#000';
  export let size = '30px';

  export let svgStyle = '';
  export let className = '';
  export let style = '';

  export let height = size;
  export let icon = '';
  export let id = '';

  export let onClick = () => {};

  const replaceFeatures = {
    width: {
      regex: /width=(["'])(?:(?=(\\?))\2.)*?\1/g,
      value: `width="100%" style="${svgStyle}"`
    },
    height: {
      regex: /height=(["'])(?:(?=(\\?))\2.)*?\1/g,
      value: `height="100%"`
    },
    fill: {
      regex: /fill=(["'])(?:(?=(\\?))\2.)*?\1/g,
      value: `fill="${color}"`
    },
    endtag: {
      regex: /\<\/svg>/,
      value: `<desc>${description}</desc></svg>`
    }
  };

  const replaceIconProps = (iconToModify) => {
    const iconsCollection = iconFonts;
    
    if (!iconsCollection || !iconsCollection.icons){
      return;
    }

    let mutatedIcon = iconsCollection.icons.find(
      (icon) => icon.name === iconToModify
    ).icon;

    Object.keys(replaceFeatures).forEach((feature) => {
      mutatedIcon =
        mutatedIcon &&
        mutatedIcon.replace(replaceFeatures[feature].regex, replaceFeatures[feature].value);
    });
    return mutatedIcon;
  };

  let treatedIcon = replaceIconProps(icon);
</script>

<span
  class="icon-wrapper d-flex align-items-center {className}"
  {id}
  data-testid={id}
  on:click={onClick}
  style={`width: ${size}; height: ${height}; ${style}`}
>
  {@html treatedIcon}
</span>
