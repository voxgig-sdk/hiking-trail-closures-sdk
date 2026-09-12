import { HikingTrailClosuresEntityBase } from '../HikingTrailClosuresEntityBase';
import type { HikingTrailClosuresSDK } from '../HikingTrailClosuresSDK';
import type { Control } from '../types';
import type { TrailClosure, TrailClosureListMatch } from '../HikingTrailClosuresTypes';
declare class TrailClosureEntity extends HikingTrailClosuresEntityBase<TrailClosure> {
    constructor(client: HikingTrailClosuresSDK, entopts: any);
    make(this: TrailClosureEntity): TrailClosureEntity;
    list(this: any, reqmatch?: TrailClosureListMatch, ctrl?: Control): Promise<TrailClosureEntity[]>;
}
export { TrailClosureEntity };
