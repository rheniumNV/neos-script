import { member, Member, Component } from "../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface ArcSegmentLayoutInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Nested?: member<any>;
NestedSizeRatio?: member<number>;
Label?: member<any>;
LabelSize?: member<[number, number]>;
LabelDistance?: member<number>;
    }
    
    export function ArcSegmentLayout(props: ArcSegmentLayoutInput){
      const { id, persistentId, updateOrder, Enabled,
Nested,
NestedSizeRatio,
Label,
LabelSize,
LabelDistance, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.ArcSegmentLayout" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.RectTransform]`} name="Nested" id={typeof Nested === "object" && "id" in Nested ? Nested?.id : undefined} value={typeof Nested === "object" && "value" in Nested ? Nested?.value : Nested} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="NestedSizeRatio" id={typeof NestedSizeRatio === "object" && "id" in NestedSizeRatio ? NestedSizeRatio?.id : undefined} value={typeof NestedSizeRatio === "object" && "value" in NestedSizeRatio ? NestedSizeRatio?.value : NestedSizeRatio} /* default: 0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="Label" id={typeof Label === "object" && "id" in Label ? Label?.id : undefined} value={typeof Label === "object" && "value" in Label ? Label?.value : Label} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.float2]`} name="LabelSize" id={typeof LabelSize === "object" && "id" in LabelSize ? LabelSize?.id : undefined} value={typeof LabelSize === "object" && "value" in LabelSize ? LabelSize?.value : LabelSize} /* default: [0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="LabelDistance" id={typeof LabelDistance === "object" && "id" in LabelDistance ? LabelDistance?.id : undefined} value={typeof LabelDistance === "object" && "value" in LabelDistance ? LabelDistance?.value : LabelDistance} /* default: 0 */  />
        </Component>
      );
    };
    