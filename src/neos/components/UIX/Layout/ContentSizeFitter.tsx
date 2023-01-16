import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ContentSizeFitterInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
HorizontalFit?: member<any>;
VerticalFit?: member<any>;
    }
    
    export function ContentSizeFitter(props: ContentSizeFitterInput){
      const { id, persistentId, updateOrder, Enabled,
HorizontalFit,
VerticalFit, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ContentSizeFitter" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.SizeFit]`} name="HorizontalFit" id={typeof HorizontalFit === "object" && "id" in HorizontalFit ? HorizontalFit?.id : undefined} value={typeof HorizontalFit === "object" && "value" in HorizontalFit ? HorizontalFit?.value : HorizontalFit} /* default: Disabled */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.UIX.SizeFit]`} name="VerticalFit" id={typeof VerticalFit === "object" && "id" in VerticalFit ? VerticalFit?.id : undefined} value={typeof VerticalFit === "object" && "value" in VerticalFit ? VerticalFit?.value : VerticalFit} /* default: Disabled */  />
        </Component>
      );
    };
    