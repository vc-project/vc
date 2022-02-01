precision mediump float;

// img (image or video) is sent by the sketch
uniform sampler2D img;
// palette is sent by the sketch
uniform sampler2D palette;

// om is sent by the sketch
uniform sampler2D om;
// displays original
uniform bool original;
// toggles om display
uniform bool om_on;
// target horizontal & vertical resolution
uniform float resolution;

uniform float npalette;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

float lumav(vec4 color){
  return 0.299*color.r + 0.587*color.g + 0.114*color.b;
}

void main() {
  if (original) {
    gl_FragColor = texture2D(img, vTexCoord);
  }
  else {
    // remap omCoord to [0.0, resolution] ∈ R
    vec2 omCoord = vTexCoord * resolution;
    // remap imgCoord to [0.0, resolution] ∈ Z
    vec2 imgCoord = floor(omCoord);
    // remap omCoord to [0.0, 1.0] ∈ R
    omCoord = omCoord - imgCoord;
    // remap imgCoord to [0.0, 1.0] ∈ R
    imgCoord = imgCoord / vec2(resolution);
    // image texel (may be used as color hash key, e.g., photomosaic)
    vec4 imgTexel = texture2D(img, imgCoord);
    if(om_on) {
      vec4 omTexel = texture2D(om, omCoord);
      gl_FragColor = texture2D(palette, vec2(floor(lumav(texture2D(img, imgCoord))*npalette)/npalette+omCoord.x/npalette, omCoord.y));
      //gl_FragColor = texture2D(palette, vec2(luma(texture2D(img, imgCoord)),omCoord.y));
    }
    else {
      gl_FragColor = imgTexel;
    }
  }
}