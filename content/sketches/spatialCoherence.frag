/*precision mediump float;

// texture is sent by the sketch
uniform sampler2D img;

// spatial coherence activation is sent by the sketch
uniform bool original;

// grid size is sent by the sketch
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
  // texture2D(texture, vTexCoord) samples texture at vTexCoord 
  // and returns the normalized texel color
  // texel color times vVertexColor gives the final normalized pixel color
  if(!original){
    vec2 vTexC = floor(vTexCoord*resolution) / resolution; // + vec2(50.0, 50.0);
    gl_FragColor =  texture2D(img, vTexC);
  } else {
    gl_FragColor = texture2D(img, vTexCoord);
  }
  
}*/

precision mediump float;

// img (image or video) is sent by the sketch
uniform sampler2D img;
// om is sent by the sketch
uniform sampler2D om;
// displays original
uniform bool original;
// toggles om display
uniform bool om_on;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

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
      vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
      vec4 omTexel = texture2D(om, omCoord);
      // glsl all: https://thebookofshaders.com/glossary/?search=all
      // glsl equal: https://thebookofshaders.com/glossary/?search=equal
      gl_FragColor = all(equal(omTexel, black)) ? imgTexel : omTexel;
    }
    else {
      gl_FragColor = imgTexel;
    }
  }
}