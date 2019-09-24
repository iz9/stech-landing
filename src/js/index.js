import '../styles/index.scss';
import video from '../media/video.mp4';

const videoHostNode = document.getElementById('background');
const videoTag = document.createElement('video');
const sourceTag = document.createElement('source');

videoTag.autoplay = true;
videoTag.muted = true;
videoTag.loop = true;
videoTag.id = 'backVideo';
sourceTag.src = video;
sourceTag.type = 'video/mp4';

videoTag.appendChild(sourceTag);
videoHostNode.appendChild(videoTag);
