import { member, Member, Component } from "../../../core";
    
    export interface PlaybackSynchronizerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Target?: member<any>;
Source?: member<any>;
UseNormalizedPosition?: member<boolean>;
PositionOffset?: member<number>;
PositionRate?: member<number>;
    }
    
    export function PlaybackSynchronizer(props: PlaybackSynchronizerInput){
      const { id, persistentId, updateOrder, Enabled,
Target,
Source,
UseNormalizedPosition,
PositionOffset,
PositionRate, } = props;
    
      return (
        <Component type="FrooxEngine.PlaybackSynchronizer" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncPlayback]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseNormalizedPosition" id={typeof UseNormalizedPosition === "object" && "id" in UseNormalizedPosition ? UseNormalizedPosition?.id : undefined} value={typeof UseNormalizedPosition === "object" && "value" in UseNormalizedPosition ? UseNormalizedPosition?.value : UseNormalizedPosition} /* default: false */  isRaw={typeof UseNormalizedPosition === "object" && "isRaw" in UseNormalizedPosition && UseNormalizedPosition.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: 0 */  isRaw={typeof PositionOffset === "object" && "isRaw" in PositionOffset && PositionOffset.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionRate" id={typeof PositionRate === "object" && "id" in PositionRate ? PositionRate?.id : undefined} value={typeof PositionRate === "object" && "value" in PositionRate ? PositionRate?.value : PositionRate} /* default: 0 */  isRaw={typeof PositionRate === "object" && "isRaw" in PositionRate && PositionRate.isRaw ? true : undefined} />
        </Component>
      );
    };
    