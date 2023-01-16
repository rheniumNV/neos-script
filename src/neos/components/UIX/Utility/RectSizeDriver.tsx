import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RectSizeDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
TargetSize?: member<any>;
Scale?: member<[number, number]>;
    }
    
    export function RectSizeDriver(props: RectSizeDriverInput){
      const { id, persistentId, updateOrder, Enabled,
TargetSize,
Scale, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RectSizeDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.float2]`} name="TargetSize" id={typeof TargetSize === "object" && "id" in TargetSize ? TargetSize?.id : undefined} value={typeof TargetSize === "object" && "value" in TargetSize ? TargetSize?.value : TargetSize} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="Scale" id={typeof Scale === "object" && "id" in Scale ? Scale?.id : undefined} value={typeof Scale === "object" && "value" in Scale ? Scale?.value : Scale} /* default: [0; 0] */  />
        </Component>
      );
    };
    