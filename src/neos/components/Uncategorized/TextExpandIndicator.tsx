import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface TextExpandIndicatorInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Text?: member<string>;
SectionRoot?: member<any>;
ChildrenRoot?: member<any>;
Closed?: member<any>;
Opened?: member<any>;
Empty?: member<any>;
CustomEmptyCheck?: member<any>;
    }
    
    export function TextExpandIndicator(props: TextExpandIndicatorInput){
      const { id, persistentId, updateOrder, Enabled,
Text,
SectionRoot,
ChildrenRoot,
Closed,
Opened,
Empty,
CustomEmptyCheck, } = props;
    
      return (
        <Component type="FrooxEngine.UIX.TextExpandIndicator" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.FieldDrive\`1[System.String]`} name="Text" id={typeof Text === "object" && "id" in Text ? Text?.id : undefined} value={typeof Text === "object" && "value" in Text ? Text?.value : Text} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="SectionRoot" id={typeof SectionRoot === "object" && "id" in SectionRoot ? SectionRoot?.id : undefined} value={typeof SectionRoot === "object" && "value" in SectionRoot ? SectionRoot?.value : SectionRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.Slot]`} name="ChildrenRoot" id={typeof ChildrenRoot === "object" && "id" in ChildrenRoot ? ChildrenRoot?.id : undefined} value={typeof ChildrenRoot === "object" && "value" in ChildrenRoot ? ChildrenRoot?.value : ChildrenRoot} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Closed" id={typeof Closed === "object" && "id" in Closed ? Closed?.id : undefined} value={typeof Closed === "object" && "value" in Closed ? Closed?.value : Closed} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Opened" id={typeof Opened === "object" && "id" in Opened ? Opened?.id : undefined} value={typeof Opened === "object" && "value" in Opened ? Opened?.value : Opened} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Empty" id={typeof Empty === "object" && "id" in Empty ? Empty?.id : undefined} value={typeof Empty === "object" && "value" in Empty ? Empty?.value : Empty} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncDelegate\`1[System.Func\`1[System.Boolean]]`} name="CustomEmptyCheck" id={typeof CustomEmptyCheck === "object" && "id" in CustomEmptyCheck ? CustomEmptyCheck?.id : undefined} value={typeof CustomEmptyCheck === "object" && "value" in CustomEmptyCheck ? CustomEmptyCheck?.value : CustomEmptyCheck} /* default: FrooxEngine.WorldDelegate */  />
        </Component>
      );
    };
    