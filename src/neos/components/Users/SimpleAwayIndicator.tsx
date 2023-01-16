import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SimpleAwayIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
User?: member<any>;
AwayMaterial?: member<any>;
Renderer?: member<any>;
    }
    
    export function SimpleAwayIndicator(props: SimpleAwayIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
User,
AwayMaterial,
Renderer, } = props;
    
      return (
        <Component type="FrooxEngine.SimpleAwayIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.User]`} name="User" id={typeof User === "object" && "id" in User ? User?.id : undefined} value={typeof User === "object" && "value" in User ? User?.value : User} /* default: ID0 */  />
<Member type={`FrooxEngine.AssetRef\`1[FrooxEngine.Material]`} name="AwayMaterial" id={typeof AwayMaterial === "object" && "id" in AwayMaterial ? AwayMaterial?.id : undefined} value={typeof AwayMaterial === "object" && "value" in AwayMaterial ? AwayMaterial?.value : AwayMaterial} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.MeshRenderer]`} name="Renderer" id={typeof Renderer === "object" && "id" in Renderer ? Renderer?.id : undefined} value={typeof Renderer === "object" && "value" in Renderer ? Renderer?.value : Renderer} /* default: ID0 */  />
        </Component>
      );
    };
    