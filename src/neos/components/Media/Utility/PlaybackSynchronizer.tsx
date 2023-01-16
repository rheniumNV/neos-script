import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
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
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncPlayback]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPlayable]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseNormalizedPosition" id={typeof UseNormalizedPosition === "object" && "id" in UseNormalizedPosition ? UseNormalizedPosition?.id : undefined} value={typeof UseNormalizedPosition === "object" && "value" in UseNormalizedPosition ? UseNormalizedPosition?.value : UseNormalizedPosition} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionOffset" id={typeof PositionOffset === "object" && "id" in PositionOffset ? PositionOffset?.id : undefined} value={typeof PositionOffset === "object" && "value" in PositionOffset ? PositionOffset?.value : PositionOffset} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="PositionRate" id={typeof PositionRate === "object" && "id" in PositionRate ? PositionRate?.id : undefined} value={typeof PositionRate === "object" && "value" in PositionRate ? PositionRate?.value : PositionRate} /* default: 0 */  />
        </Component>
      );
    };
    