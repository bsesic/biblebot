module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://botkit.ai/docs/readme-studio.html#controllerstudiobefore
    controller.studio.before('help', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: help');
        // don't forget to call next, or your conversation will never continue.
        next();

    });


    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://botkit.ai/docs/readme-studio.html#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('help','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *help*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the uptime thread starts, run this:
    controller.studio.beforeThread('help','uptime', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *help*, about to start the thread *uptime*');

        // always call next!
        next();
    });

    // Before the say thread starts, run this:
    controller.studio.beforeThread('help','say', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *help*, about to start the thread *say*');

        // always call next!
        next();
    });

    // Before the identify thread starts, run this:
    controller.studio.beforeThread('help','identify', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *help*, about to start the thread *identify*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://botkit.ai/docs/readme-studio.html#controllerstudioafter
    controller.studio.after('help', function(convo, next) {

        console.log('AFTER: help');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
