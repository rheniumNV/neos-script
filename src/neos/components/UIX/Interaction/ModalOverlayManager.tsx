import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ModalOverlayManagerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Template?: member<any>;
Constructor?: member<any>;
ModalOverlayRequested?: member<any>;
ModalOverlayGenerated?: member<any>;
SpawnRoot?: member<any>;
    }
    
    export function ModalOverlayManager(props: ModalOverlayManagerInput){
      const { id, persistentId, updateOrder, Enabled,
Template,
Constructor,
ModalOverlayRequested,
ModalOverlayGenerated,
SpawnRoot, } = props;
    
      return (
        <Component type="FrooxEngine.ModalOverlayManager" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.ModalOverlay]`} name="Template" id={typeof Template === "object" && "id" in Template ? Template?.id : undefined} value={typeof Template === "object" && "value" in Template ? Template?.value : Template} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.ModalOverlayConstructor]`} name="Constructor" id={typeof Constructor === "object" && "id" in Constructor ? Constructor?.id : undefined} value={typeof Constructor === "object" && "value" in Constructor ? Constructor?.value : Constructor} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`1[FrooxEngine.ModalOverlayManager]]`} name="ModalOverlayRequested" id={typeof ModalOverlayRequested === "object" && "id" in ModalOverlayRequested ? ModalOverlayRequested?.id : undefined} value={typeof ModalOverlayRequested === "object" && "value" in ModalOverlayRequested ? ModalOverlayRequested?.value : ModalOverlayRequested} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Action\`2[FrooxEngine.ModalOverlayManager,FrooxEngine.UIX.ModalOverlay]]`} name="ModalOverlayGenerated" id={typeof ModalOverlayGenerated === "object" && "id" in ModalOverlayGenerated ? ModalOverlayGenerated?.id : undefined} value={typeof ModalOverlayGenerated === "object" && "value" in ModalOverlayGenerated ? ModalOverlayGenerated?.value : ModalOverlayGenerated} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SpawnRoot" id={typeof SpawnRoot === "object" && "id" in SpawnRoot ? SpawnRoot?.id : undefined} value={typeof SpawnRoot === "object" && "value" in SpawnRoot ? SpawnRoot?.value : SpawnRoot} /* default: ID0 */  />
        </Component>
      );
    };
    