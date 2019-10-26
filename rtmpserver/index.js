const NodeMediaServer = require('node-media-server');

const config = {
	//rtmp server will receive traffic from local computer on port:1935
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },

  //requested video will feed on port:8000 
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();