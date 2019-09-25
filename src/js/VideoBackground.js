import video from '../media/video.mp4';

function isPrimitive(value) {
  return value !== Object(value);
}

const hostNodePatch = {
  style: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
};

const videoNodePatch = {
  style: {
    width: 'auto',
    height: '100%',
    transform: 'scale(1.2)',
    pointerEvents: 'none',
  },
  autoplay: true,
  muted: true,
  loop: true,
  id: 'backVideo',
};

const sourceNodePatch = {
  src: video,
  type: 'video/mp4',
};

class VideoBackground {
  constructor() {
    this.hostNode = this.makeNode('div', hostNodePatch);
    this.videoTagNode = this.makeNode('video', videoNodePatch);
    this.sourceTagNode = this.makeNode('source', sourceNodePatch);

    this.videoTagNode.appendChild(this.sourceTagNode);
    this.hostNode.appendChild(this.videoTagNode);
  }

  append(hostNodeId) {
    if (hostNodeId)
      document.getElementById(hostNodeId).appendChild(this.hostNode);
    else document.body.appendChild(this.hostNode);
  }

  destroy() {
    document.body.removeChild(this.hostNode);
  }

  makeNode(type, config) {
    const node = document.createElement(type);
    return this.patchNode(node, config);
  }

  patchNode(node, patch) {
    for (const prop in patch) {
      if (isPrimitive(patch[prop])) {
        node[prop] = patch[prop];
      } else this.patchNode(node[prop], patch[prop]);
    }
    return node;
  }
}

export default VideoBackground;
