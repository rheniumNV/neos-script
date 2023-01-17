import { member, Member, Component } from "../../../core";
    
    export interface PlaybackPositionDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Source?: member<any>;
UseNormalizedPosition?: member<boolean>;
WriteBack?: member<boolean>;
    }
    
    export function PlaybackPositionDriver(props: PlaybackPositionDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Source,
UseNormalizedPosition,
WriteBack, } = props;
    
      return (
        <Component type="FrooxEngine.PlaybackPositionDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseNormalizedPosition" id={typeof UseNormalizedPosition === "object" && "id" in UseNormalizedPosition ? UseNormalizedPosition?.id : undefined} value={typeof UseNormalizedPosition === "object" && "value" in UseNormalizedPosition ? UseNormalizedPosition?.value : UseNormalizedPosition} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: false */  />
        </Component>
      );
    };
    