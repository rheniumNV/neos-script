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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[System.Single]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseNormalizedPosition" id={typeof UseNormalizedPosition === "object" && "id" in UseNormalizedPosition ? UseNormalizedPosition?.id : undefined} value={typeof UseNormalizedPosition === "object" && "value" in UseNormalizedPosition ? UseNormalizedPosition?.value : UseNormalizedPosition} /* default: false */  isRaw={typeof UseNormalizedPosition === "object" && "isRaw" in UseNormalizedPosition && UseNormalizedPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="WriteBack" id={typeof WriteBack === "object" && "id" in WriteBack ? WriteBack?.id : undefined} value={typeof WriteBack === "object" && "value" in WriteBack ? WriteBack?.value : WriteBack} /* default: false */  isRaw={typeof WriteBack === "object" && "isRaw" in WriteBack && WriteBack.isRaw ? true : undefined} />
        </Component>
      );
    };
    