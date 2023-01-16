import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ScaleGroupInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
SelectedElement?: member<any>;
IdleScale?: member<[number, number, number]>;
BackgroundScale?: member<[number, number, number]>;
SelectedScale?: member<[number, number, number]>;
SmoothSpeed?: member<number>;
    }
    
    export function ScaleGroup(props: ScaleGroupInput){
      const { id, persistentId, updateOrder, Enabled,
SelectedElement,
IdleScale,
BackgroundScale,
SelectedScale,
SmoothSpeed, } = props;
    
      return (
        <Component type="FrooxEngine.ScaleGroup" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.ScaleElement]`} name="SelectedElement" id={typeof SelectedElement === "object" && "id" in SelectedElement ? SelectedElement?.id : undefined} value={typeof SelectedElement === "object" && "value" in SelectedElement ? SelectedElement?.value : SelectedElement} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="IdleScale" id={typeof IdleScale === "object" && "id" in IdleScale ? IdleScale?.id : undefined} value={typeof IdleScale === "object" && "value" in IdleScale ? IdleScale?.value : IdleScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="BackgroundScale" id={typeof BackgroundScale === "object" && "id" in BackgroundScale ? BackgroundScale?.id : undefined} value={typeof BackgroundScale === "object" && "value" in BackgroundScale ? BackgroundScale?.value : BackgroundScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float3]`} name="SelectedScale" id={typeof SelectedScale === "object" && "id" in SelectedScale ? SelectedScale?.id : undefined} value={typeof SelectedScale === "object" && "value" in SelectedScale ? SelectedScale?.value : SelectedScale} /* default: [0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="SmoothSpeed" id={typeof SmoothSpeed === "object" && "id" in SmoothSpeed ? SmoothSpeed?.id : undefined} value={typeof SmoothSpeed === "object" && "value" in SmoothSpeed ? SmoothSpeed?.value : SmoothSpeed} /* default: 0 */  />
        </Component>
      );
    };
    