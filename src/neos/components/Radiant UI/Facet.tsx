import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface FacetInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
MinWidth?: member<number>;
MaxWidth?: member<number>;
MinHeight?: member<number>;
MaxHeight?: member<number>;
LastPlacedSize?: member<any>;
PreferredSizes?: member<any>;
AllowedAspectRatios?: member<any>;
IsStandalone?: member<boolean>;
_canvas?: member<any>;
    }
    
    export function Facet(props: FacetInput){
      const { id, persistentId, updateOrder, Enabled,
MinWidth,
MaxWidth,
MinHeight,
MaxHeight,
LastPlacedSize,
PreferredSizes,
AllowedAspectRatios,
IsStandalone,
_canvas, } = props;
    
      return (
        <Component type="FrooxEngine.Facet" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinWidth" id={typeof MinWidth === "object" && "id" in MinWidth ? MinWidth?.id : undefined} value={typeof MinWidth === "object" && "value" in MinWidth ? MinWidth?.value : MinWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxWidth" id={typeof MaxWidth === "object" && "id" in MaxWidth ? MaxWidth?.id : undefined} value={typeof MaxWidth === "object" && "value" in MaxWidth ? MaxWidth?.value : MaxWidth} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MinHeight" id={typeof MinHeight === "object" && "id" in MinHeight ? MinHeight?.id : undefined} value={typeof MinHeight === "object" && "value" in MinHeight ? MinHeight?.value : MinHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="MaxHeight" id={typeof MaxHeight === "object" && "id" in MaxHeight ? MaxHeight?.id : undefined} value={typeof MaxHeight === "object" && "value" in MaxHeight ? MaxHeight?.value : MaxHeight} /* default: 0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Nullable\`1[BaseX.float2]]`} name="LastPlacedSize" id={typeof LastPlacedSize === "object" && "id" in LastPlacedSize ? LastPlacedSize?.id : undefined} value={typeof LastPlacedSize === "object" && "value" in LastPlacedSize ? LastPlacedSize?.value : LastPlacedSize} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncFieldList\`1[BaseX.float2]`} name="PreferredSizes" id={typeof PreferredSizes === "object" && "id" in PreferredSizes ? PreferredSizes?.id : undefined} value={typeof PreferredSizes === "object" && "value" in PreferredSizes ? PreferredSizes?.value : PreferredSizes} /* default: FrooxEngine.SyncFieldList`1[BaseX.float2] */  />
<Member type={`FrooxEngine.SyncFieldList\`1[BaseX.float2]`} name="AllowedAspectRatios" id={typeof AllowedAspectRatios === "object" && "id" in AllowedAspectRatios ? AllowedAspectRatios?.id : undefined} value={typeof AllowedAspectRatios === "object" && "value" in AllowedAspectRatios ? AllowedAspectRatios?.value : AllowedAspectRatios} /* default: FrooxEngine.SyncFieldList`1[BaseX.float2] */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsStandalone" id={typeof IsStandalone === "object" && "id" in IsStandalone ? IsStandalone?.id : undefined} value={typeof IsStandalone === "object" && "value" in IsStandalone ? IsStandalone?.value : IsStandalone} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Canvas]`} name="_canvas" id={typeof _canvas === "object" && "id" in _canvas ? _canvas?.id : undefined} value={typeof _canvas === "object" && "value" in _canvas ? _canvas?.value : _canvas} /* default: ID0 */  />
        </Component>
      );
    };
    