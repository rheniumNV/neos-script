import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface MeshRendererMaterialRelayInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
_renderer?: member<any>;
    }
    
    export function MeshRendererMaterialRelay(props: MeshRendererMaterialRelayInput){
      const { id, persistentId, updateOrder, Enabled,
_renderer, } = props;
    
      return (
        <Component type="FrooxEngine.MeshRendererMaterialRelay" id={id} persistentId={persistentId} updateOrder={updateOrder} version={1}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="_renderer-ID" id={typeof _renderer === "object" && "id" in _renderer ? _renderer?.id : undefined} value={typeof _renderer === "object" && "value" in _renderer ? _renderer?.value : _renderer} /* default: ID0 */ idOnly />
        </Component>
      );
    };
    