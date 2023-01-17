import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TrackedHandInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
HandChirality?: member<any>;
_grabber?: member<any>;
    }
    
    export function TrackedHand(props: TrackedHandInput){
      const { id, persistentId, updateOrder, Enabled,
User,
HandChirality,
_grabber, } = props;
    
      return (
        <Component type="FrooxEngine.TrackedHand" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Chirality]`} name="HandChirality" id={typeof HandChirality === "object" && "id" in HandChirality ? HandChirality?.id : undefined} value={typeof HandChirality === "object" && "value" in HandChirality ? HandChirality?.value : HandChirality} /* default: Left */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Grabber]`} name="_grabber" id={typeof _grabber === "object" && "id" in _grabber ? _grabber?.id : undefined} value={typeof _grabber === "object" && "value" in _grabber ? _grabber?.value : _grabber} /* default: ID0 */  />
        </Component>
      );
    };
    