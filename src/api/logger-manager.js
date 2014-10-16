/**
@module logger-manager
*/

/**
控制台log输出

示例1：
    
    require(['logger-manager'], function(LoggerManager){
        LoggerManager.log('hello', 'warn')
    });

示例2：
    
    require(['logger-manager'], function(LoggerManager){
        LoggerManager.config({
            includes: [
                {
                    logger: /^KISSY/,
                    minLevel : 'info',
                    maxLevel : 'warn'
                }
            ],
            excludes: [
                {
                    logger: /^modulex/, //以xx/开头的不显示
                    maxLevel: 'info' //不显示 info 及 info 以下的 log
                }
            ]
        })
        var KissyLogger = LoggerManager.getLogger('KISSY');
        KissyLogger.debug('hello KISSY');  //不会输出，因为配置了 minLevel : 'info'
        KissyLogger.info('KISSY info');  //输出  KISSY: KISSY info
        KissyLogger.warn('KISSY warn');  //输出 KISSY: KISSY warn
        KissyLogger.error('KISSY error');  //不会输出，因为配置了 maxLevel : 'warn'

        var ModulexLogger = LoggerManager.getLogger('modulex');  
        ModulexLogger.debug('hello modulex');  // 不会输出
    });

@class LoggerManager
@static
*/

/**
* 生成一个log示例，将 str 作为输出的 log 的前缀。这个log示例有 .debug .info .warn .error 方法，通过这些方法来输出log。
* @method getLogger
* @static
* @param str {String}  log 的前缀
* @return {Object} logger对象
* @example
*   ```
var logger = KISSY.getLogger('KISSY');
logger.debug("test"); // => "KISSY: test";
*   ```
* __Note__
* 可以在配置中设置logger的级别，以及是否显示，logger级别从低到高顺序是：debug < info < warn < error

当一个 logger 同时被设置 includes 和 excludes 的时候，includes 优先。 includes 和 excludes 配置类型为 Array ，每个配置对象配置项有maxLevel,minLevel,logger，注意他们是 "与" 的逻辑关系。
* ```
LoggerManager.config({
    includes: [
        {
            logger: /^xx\//
        }
    ],
    excludes: [
        {
            logger: /^xx\//， //以xx/开头的不显示
            maxLevel: 'info' //不显示 info 及 info 以下的 log
        }
    ]
});
*   ```
*/

/**
增加log配置，控制输出。
@method config
@param cfg {Object} 配置对象
@param cfg.includes {Array} 哪些logger会输出，包括属性 logger , minLevel , maxLevel
@param cfg.excludes {Array} 哪些logger被排除输出，包括属性 logger , minLevel , maxLevel
@example
    
    LoggerManager.config({
        includes: [
            {
                logger: /^xx\//
            }
        ],
        excludes: [
            {
                logger: /^xx\//， //以xx/开头的不显示
                maxLevel: 'info' //不显示 info 及 info 以下的 log
            }
        ]
    });
*/