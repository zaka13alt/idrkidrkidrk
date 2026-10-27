const __cfgBase = self.location.pathname.replace(/jjoxma\.js$/, '')

self.__uv$config = {
	prefix: __cfgBase + 'eq/',
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: __cfgBase + 'xmu/dvbu.handler.js',
	client: __cfgBase + 'xmu/dvbu.client.js',
	bundle: __cfgBase + 'xmu/dvbu.bundle.js',
	config: __cfgBase + 'xmu/dvbu.config.js',
	sw: __cfgBase + 'xmu/dvbu.sw.js'
}
