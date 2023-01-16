import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DrivePlaybackNodeInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_activeVisual?: member<any>;
NormalizedPosition?: member<any>;
MaximumPositionError?: member<any>;
Speed?: member<any>;
Play?: member<any>;
Loop?: member<any>;
DriveTarget?: member<any>;
OnStartDrive?: member<any>;
OnStopDrive?: member<any>;
_drive?: member<any>;
    }
    
    export function DrivePlaybackNode(props: DrivePlaybackNodeInput){
      const { id, persistentId, updateOrder, Enabled,
_activeVisual,
NormalizedPosition,
MaximumPositionError,
Speed,
Play,
Loop,
DriveTarget,
OnStartDrive,
OnStopDrive,
_drive, } = props;
    
      return (
        <Component type="FrooxEngine.LogiX.Actions.DrivePlaybackNode" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`} name="_activeVisual" id={typeof _activeVisual === "object" && "id" in _activeVisual ? _activeVisual?.id : undefined} value={typeof _activeVisual === "object" && "value" in _activeVisual ? _activeVisual?.value : _activeVisual} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="NormalizedPosition" id={typeof NormalizedPosition === "object" && "id" in NormalizedPosition ? NormalizedPosition?.id : undefined} value={typeof NormalizedPosition === "object" && "value" in NormalizedPosition ? NormalizedPosition?.value : NormalizedPosition} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="MaximumPositionError" id={typeof MaximumPositionError === "object" && "id" in MaximumPositionError ? MaximumPositionError?.id : undefined} value={typeof MaximumPositionError === "object" && "value" in MaximumPositionError ? MaximumPositionError?.value : MaximumPositionError} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Single]`} name="Speed" id={typeof Speed === "object" && "id" in Speed ? Speed?.id : undefined} value={typeof Speed === "object" && "value" in Speed ? Speed?.value : Speed} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Play" id={typeof Play === "object" && "id" in Play ? Play?.id : undefined} value={typeof Play === "object" && "value" in Play ? Play?.value : Play} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[System.Boolean]`} name="Loop" id={typeof Loop === "object" && "id" in Loop ? Loop?.id : undefined} value={typeof Loop === "object" && "value" in Loop ? Loop?.value : Loop} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Input\`1[FrooxEngine.SyncPlayback]`} name="DriveTarget" id={typeof DriveTarget === "object" && "id" in DriveTarget ? DriveTarget?.id : undefined} value={typeof DriveTarget === "object" && "value" in DriveTarget ? DriveTarget?.value : DriveTarget} /* default: ID0 */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStartDrive" id={typeof OnStartDrive === "object" && "id" in OnStartDrive ? OnStartDrive?.id : undefined} value={typeof OnStartDrive === "object" && "value" in OnStartDrive ? OnStartDrive?.value : OnStartDrive} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.LogiX.Impulse`} name="OnStopDrive" id={typeof OnStopDrive === "object" && "id" in OnStopDrive ? OnStopDrive?.id : undefined} value={typeof OnStopDrive === "object" && "value" in OnStopDrive ? OnStopDrive?.value : OnStopDrive} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.DriveRef\`1[FrooxEngine.SyncPlayback]`} name="_drive" id={typeof _drive === "object" && "id" in _drive ? _drive?.id : undefined} value={typeof _drive === "object" && "value" in _drive ? _drive?.value : _drive} /* default: ID0 */  />
        </Component>
      );
    };
    