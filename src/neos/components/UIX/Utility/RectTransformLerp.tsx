import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface RectTransformLerpInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Lerp?: member<number>;
SourceRect?: member<any>;
    }
    
    export function RectTransformLerp(props: RectTransformLerpInput){
      const { id, persistentId, updateOrder, Enabled,
Lerp,
SourceRect, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.RectTransformLerp" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="Lerp" id={typeof Lerp === "object" && "id" in Lerp ? Lerp?.id : undefined} value={typeof Lerp === "object" && "value" in Lerp ? Lerp?.value : Lerp} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="SourceRect" id={typeof SourceRect === "object" && "id" in SourceRect ? SourceRect?.id : undefined} value={typeof SourceRect === "object" && "value" in SourceRect ? SourceRect?.value : SourceRect} /* default: ID0 */  />
        </Component>
      );
    };
    