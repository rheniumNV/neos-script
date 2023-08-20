import { member, Member, Component } from "../../../core";
    
    export interface VolumeMeterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Volume?: member<any>;
Smoothing?: member<number>;
Power?: member<number>;
Source?: member<any>;
    }
    
    export function VolumeMeter(props: VolumeMeterInput){
      const { id, persistentId, updateOrder, Enabled,
Volume,
Smoothing,
Power,
Source, } = props;
    
      return (
        <Component type="FrooxEngine.VolumeMeter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="Volume" id={typeof Volume === "object" && "id" in Volume ? Volume?.id : undefined} value={typeof Volume === "object" && "value" in Volume ? Volume?.value : Volume} /* default: FrooxEngine.RawOutput`1[System.Single] */  isRaw={typeof Volume === "object" && "isRaw" in Volume && Volume.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Smoothing" id={typeof Smoothing === "object" && "id" in Smoothing ? Smoothing?.id : undefined} value={typeof Smoothing === "object" && "value" in Smoothing ? Smoothing?.value : Smoothing} /* default: 0 */  isRaw={typeof Smoothing === "object" && "isRaw" in Smoothing && Smoothing.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Power" id={typeof Power === "object" && "id" in Power ? Power?.id : undefined} value={typeof Power === "object" && "value" in Power ? Power?.value : Power} /* default: 0 */  isRaw={typeof Power === "object" && "isRaw" in Power && Power.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAudioSource]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
        </Component>
      );
    };
    