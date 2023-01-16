import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface DesktopControlDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
InteractionRelay?: member<any>;
Index?: member<number>;
FollowCursor?: member<boolean>;
Brightness?: member<number>;
Opacity?: member<number>;
LegacyInputMode?: member<boolean>;
    }
    
    export function DesktopControlDialog(props: DesktopControlDialogInput){
      const { id, persistentId, updateOrder, Enabled,
InteractionRelay,
Index,
FollowCursor,
Brightness,
Opacity,
LegacyInputMode, } = props;
    
      return (
        <Component type="FrooxEngine.DesktopControlDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.DesktopInteractionRelay]`} name="InteractionRelay" id={typeof InteractionRelay === "object" && "id" in InteractionRelay ? InteractionRelay?.id : undefined} value={typeof InteractionRelay === "object" && "value" in InteractionRelay ? InteractionRelay?.value : InteractionRelay} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Index" id={typeof Index === "object" && "id" in Index ? Index?.id : undefined} value={typeof Index === "object" && "value" in Index ? Index?.value : Index} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FollowCursor" id={typeof FollowCursor === "object" && "id" in FollowCursor ? FollowCursor?.id : undefined} value={typeof FollowCursor === "object" && "value" in FollowCursor ? FollowCursor?.value : FollowCursor} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Brightness" id={typeof Brightness === "object" && "id" in Brightness ? Brightness?.id : undefined} value={typeof Brightness === "object" && "value" in Brightness ? Brightness?.value : Brightness} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Opacity" id={typeof Opacity === "object" && "id" in Opacity ? Opacity?.id : undefined} value={typeof Opacity === "object" && "value" in Opacity ? Opacity?.value : Opacity} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="LegacyInputMode" id={typeof LegacyInputMode === "object" && "id" in LegacyInputMode ? LegacyInputMode?.id : undefined} value={typeof LegacyInputMode === "object" && "value" in LegacyInputMode ? LegacyInputMode?.value : LegacyInputMode} /* default: false */  />
        </Component>
      );
    };
    