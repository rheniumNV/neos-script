import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface VRIKInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
AutoUpdate?: member<boolean>;
FixTransformsEnabled?: member<boolean>;
Solver?: member<any>;
componentInitiated?: member<boolean>;
    }
    
    export function VRIK(props: VRIKInput){
      const { id, persistentId, updateOrder, Enabled,
AutoUpdate,
FixTransformsEnabled,
Solver,
componentInitiated, } = props;
    
      return (
        <Component type="FrooxEngine.FinalIK.VRIK" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoUpdate" id={typeof AutoUpdate === "object" && "id" in AutoUpdate ? AutoUpdate?.id : undefined} value={typeof AutoUpdate === "object" && "value" in AutoUpdate ? AutoUpdate?.value : AutoUpdate} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="FixTransformsEnabled" id={typeof FixTransformsEnabled === "object" && "id" in FixTransformsEnabled ? FixTransformsEnabled?.id : undefined} value={typeof FixTransformsEnabled === "object" && "value" in FixTransformsEnabled ? FixTransformsEnabled?.value : FixTransformsEnabled} /* default: false */  />
<Member type={`FrooxEngine.FinalIK.IKSolverVR`} name="Solver" id={typeof Solver === "object" && "id" in Solver ? Solver?.id : undefined} value={typeof Solver === "object" && "value" in Solver ? Solver?.value : Solver} /* default: Element:\ ID0,\ Type:\ FrooxEngine\.FinalIK\.IKSolverVR,\ World:\ null,\ IsRemoved:\ false,\ Name:\ \r\n */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="componentInitiated" id={typeof componentInitiated === "object" && "id" in componentInitiated ? componentInitiated?.id : undefined} value={typeof componentInitiated === "object" && "value" in componentInitiated ? componentInitiated?.value : componentInitiated} /* default: false */  />
        </Component>
      );
    };
    