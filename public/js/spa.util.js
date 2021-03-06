/**
 * 通用工具类
 * @namespace spa.util.js
 */

spa.util = (function() {
    var makeError, setConfigMap;

    /**
     * 创建错误对象
     * @param name_text
     * @param msg_text
     * @param data
     * @return
     */
    makeError = function(name_text, msg_text, data) {
        var error = new Error();
        error.name = name_text;
        error.message = msg_text;
        if(data) {
            error.data = data;
        }
        return error;
    };

    /**
     * 设置配置
     */
    setConfigMap = function(arg_map) {
        var input_map = arg_map.input_map,
            settable_map = arg_map.settable_map,
            config_map = arg_map.config_map,
            key_name, error;
        for(key_name in input_map) {
            if(input_map.hasOwnProperty(key_name)) {
                config_map[key_name] = input_map[key_name];
            }
            else {
                error = makeError('输入错误',
                    'Setting config key |' + key_name + '| is not supported'
                );
                throw error;
            }
        }
    };

    return {
        makeError: makeError,
        setConfigMap: setConfigMap
    };
}());
