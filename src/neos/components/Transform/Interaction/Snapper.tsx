import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface SnapperInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UseBoundingBoxCenter?: member<boolean>;
SnapCheckRadius?: member<number>;
CheckStaticColliders?: member<boolean>;
    }
    
    export function Snapper(props: SnapperInput){
      const { id, persistentId, updateOrder, Enabled,
UseBoundingBoxCenter,
SnapCheckRadius,
CheckStaticColliders, } = props;
    
      return (
        <Component type="FrooxEngine.Snapper" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="UseBoundingBoxCenter" id={typeof UseBoundingBoxCenter === "object" && "id" in UseBoundingBoxCenter ? UseBoundingBoxCenter?.id : undefined} value={typeof UseBoundingBoxCenter === "object" && "value" in UseBoundingBoxCenter ? UseBoundingBoxCenter?.value : UseBoundingBoxCenter} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SnapCheckRadius" id={typeof SnapCheckRadius === "object" && "id" in SnapCheckRadius ? SnapCheckRadius?.id : undefined} value={typeof SnapCheckRadius === "object" && "value" in SnapCheckRadius ? SnapCheckRadius?.value : SnapCheckRadius} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="CheckStaticColliders" id={typeof CheckStaticColliders === "object" && "id" in CheckStaticColliders ? CheckStaticColliders?.id : undefined} value={typeof CheckStaticColliders === "object" && "value" in CheckStaticColliders ? CheckStaticColliders?.value : CheckStaticColliders} /* default: false */  />
        </Component>
      );
    };
    