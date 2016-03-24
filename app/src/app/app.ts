import {App, events, register, routing, web} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import PostListViewControl from '../viewcontrols/postlist/postlist.vc';
import ComposePostViewControl from '../viewcontrols/composepost/composepost.vc';
import SinglePostViewControl from '../viewcontrols/singlepost/singlepost.vc';

export default class MyApp extends App {
    constructor(router: routing.Router, config: web.IBrowserConfig) {
        super();

		config.routingType = config.STATE;

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'postlist', view: PostListViewControl },
            { pattern: 'compose', view : ComposePostViewControl },
            { pattern: 'posts/:id', view : SinglePostViewControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router,
    web.IBrowserConfig
]);
