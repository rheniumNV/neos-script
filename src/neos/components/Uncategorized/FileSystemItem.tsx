import { member, Member, Component } from "../../core";
    
    export interface FileSystemItemInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Browser?: member<any>;
SelectedColor?: member<[number, number, number, number]>;
NormalColor?: member<[number, number, number, number]>;
Name?: member<any>;
BasePath?: member<any>;
Type?: member<any>;
    }
    
    export function FileSystemItem(props: FileSystemItemInput){
      const { id, persistentId, updateOrder, Enabled,
Browser,
SelectedColor,
NormalColor,
Name,
BasePath,
Type, } = props;
    
      return (
        <Component type="FrooxEngine.FileSystemItem" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.BrowserDialog]`} name="Browser" id={typeof Browser === "object" && "id" in Browser ? Browser?.id : undefined} value={typeof Browser === "object" && "value" in Browser ? Browser?.value : Browser} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="SelectedColor" id={typeof SelectedColor === "object" && "id" in SelectedColor ? SelectedColor?.id : undefined} value={typeof SelectedColor === "object" && "value" in SelectedColor ? SelectedColor?.value : SelectedColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[BaseX.color]`} name="NormalColor" id={typeof NormalColor === "object" && "id" in NormalColor ? NormalColor?.id : undefined} value={typeof NormalColor === "object" && "value" in NormalColor ? NormalColor?.value : NormalColor} /* default: [0; 0; 0; 0] */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Name" id={typeof Name === "object" && "id" in Name ? Name?.id : undefined} value={typeof Name === "object" && "value" in Name ? Name?.value : Name} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="BasePath" id={typeof BasePath === "object" && "id" in BasePath ? BasePath?.id : undefined} value={typeof BasePath === "object" && "value" in BasePath ? BasePath?.value : BasePath} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.FileSystemItem+EntryType]`} name="Type" id={typeof Type === "object" && "id" in Type ? Type?.id : undefined} value={typeof Type === "object" && "value" in Type ? Type?.value : Type} /* default: File */  />
        </Component>
      );
    };
    