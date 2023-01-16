import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MultiUserAvatarAnchorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AnchorPointSnap?: member<any>;
MaxUsers?: member<number>;
MinDistance?: member<number>;
Template?: member<any>;
AnchorsRoot?: member<any>;
AcceptOutOfSightTouch?: member<boolean>;
AcceptPhysicalTouch?: member<boolean>;
AcceptRemoteTouch?: member<boolean>;
    }
    
    export function MultiUserAvatarAnchor(props: MultiUserAvatarAnchorInput){
      const { id, persistentId, updateOrder, Enabled,
AnchorPointSnap,
MaxUsers,
MinDistance,
Template,
AnchorsRoot,
AcceptOutOfSightTouch,
AcceptPhysicalTouch,
AcceptRemoteTouch, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.MultiUserAvatarAnchor" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IPointSnappable]`} name="AnchorPointSnap" id={typeof AnchorPointSnap === "object" && "id" in AnchorPointSnap ? AnchorPointSnap?.id : undefined} value={typeof AnchorPointSnap === "object" && "value" in AnchorPointSnap ? AnchorPointSnap?.value : AnchorPointSnap} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="MaxUsers" id={typeof MaxUsers === "object" && "id" in MaxUsers ? MaxUsers?.id : undefined} value={typeof MaxUsers === "object" && "value" in MaxUsers ? MaxUsers?.value : MaxUsers} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinDistance" id={typeof MinDistance === "object" && "id" in MinDistance ? MinDistance?.id : undefined} value={typeof MinDistance === "object" && "value" in MinDistance ? MinDistance?.value : MinDistance} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IAvatarAnchor]`} name="Template" id={typeof Template === "object" && "id" in Template ? Template?.id : undefined} value={typeof Template === "object" && "value" in Template ? Template?.value : Template} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="AnchorsRoot" id={typeof AnchorsRoot === "object" && "id" in AnchorsRoot ? AnchorsRoot?.id : undefined} value={typeof AnchorsRoot === "object" && "value" in AnchorsRoot ? AnchorsRoot?.value : AnchorsRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptOutOfSightTouch" id={typeof AcceptOutOfSightTouch === "object" && "id" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.id : undefined} value={typeof AcceptOutOfSightTouch === "object" && "value" in AcceptOutOfSightTouch ? AcceptOutOfSightTouch?.value : AcceptOutOfSightTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptPhysicalTouch" id={typeof AcceptPhysicalTouch === "object" && "id" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.id : undefined} value={typeof AcceptPhysicalTouch === "object" && "value" in AcceptPhysicalTouch ? AcceptPhysicalTouch?.value : AcceptPhysicalTouch} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AcceptRemoteTouch" id={typeof AcceptRemoteTouch === "object" && "id" in AcceptRemoteTouch ? AcceptRemoteTouch?.id : undefined} value={typeof AcceptRemoteTouch === "object" && "value" in AcceptRemoteTouch ? AcceptRemoteTouch?.value : AcceptRemoteTouch} /* default: false */  />
        </Component>
      );
    };
    