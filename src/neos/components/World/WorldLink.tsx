import { member, Member, Component } from "../../core";
    
    export interface WorldLinkInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
URL?: member<any>;
ActiveSessionURLs?: member<any>;
CreateIfNotExists?: member<any>;
WorldRelation?: member<any>;
AutoFocus?: member<boolean>;
GetExisting?: member<boolean>;
    }
    
    export function WorldLink(props: WorldLinkInput){
      const { id, persistentId, updateOrder, Enabled,
URL,
ActiveSessionURLs,
CreateIfNotExists,
WorldRelation,
AutoFocus,
GetExisting, } = props;
    
      return (
        <Component type="FrooxEngine.WorldLink" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="URL" id={typeof URL === "object" && "id" in URL ? URL?.id : undefined} value={typeof URL === "object" && "value" in URL ? URL?.value : URL} /* default: <i>null</i> */  />
<Member type={`FrooxEngine.SyncFieldList\`1[System.Uri]`} name="ActiveSessionURLs-ID" id={typeof ActiveSessionURLs === "object" && "id" in ActiveSessionURLs ? ActiveSessionURLs?.id : undefined} value={typeof ActiveSessionURLs === "object" && "value" in ActiveSessionURLs ? ActiveSessionURLs?.value : ActiveSessionURLs} /* default: FrooxEngine.SyncFieldList`1[System.Uri] */ idOnly />
<Member type={`FrooxEngine.SyncDelegate\`1[FrooxEngine.WorldCreator]`} name="CreateIfNotExists" id={typeof CreateIfNotExists === "object" && "id" in CreateIfNotExists ? CreateIfNotExists?.id : undefined} value={typeof CreateIfNotExists === "object" && "value" in CreateIfNotExists ? CreateIfNotExists?.value : CreateIfNotExists} /* default: FrooxEngine.WorldDelegate */  />
<Member type={`FrooxEngine.Sync\`1[FrooxEngine.Userspace+WorldRelation]`} name="WorldRelation" id={typeof WorldRelation === "object" && "id" in WorldRelation ? WorldRelation?.id : undefined} value={typeof WorldRelation === "object" && "value" in WorldRelation ? WorldRelation?.value : WorldRelation} /* default: Independent */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="AutoFocus" id={typeof AutoFocus === "object" && "id" in AutoFocus ? AutoFocus?.id : undefined} value={typeof AutoFocus === "object" && "value" in AutoFocus ? AutoFocus?.value : AutoFocus} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="GetExisting" id={typeof GetExisting === "object" && "id" in GetExisting ? GetExisting?.id : undefined} value={typeof GetExisting === "object" && "value" in GetExisting ? GetExisting?.value : GetExisting} /* default: false */  />
        </Component>
      );
    };
    