import { member, Member, Component } from "../../../core";
    
    export interface CloudUserInfoInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
UserId?: member<any>;
IsLoaded?: member<any>;
Username?: member<any>;
RegistrationDate?: member<any>;
IconURL?: member<any>;
IsContact?: member<boolean>;
_loadedUserId?: member<any>;
    }
    
    export function CloudUserInfo(props: CloudUserInfoInput){
      const { id, persistentId, updateOrder, Enabled,
UserId,
IsLoaded,
Username,
RegistrationDate,
IconURL,
IsContact,
_loadedUserId, } = props;
    
      return (
        <Component type="FrooxEngine.CloudUserInfo" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="UserId" id={typeof UserId === "object" && "id" in UserId ? UserId?.id : undefined} value={typeof UserId === "object" && "value" in UserId ? UserId?.value : UserId} /* default: <i>null</i> */  isRaw={typeof UserId === "object" && "isRaw" in UserId && UserId.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RawOutput\`1[System.Boolean]`} name="IsLoaded" id={typeof IsLoaded === "object" && "id" in IsLoaded ? IsLoaded?.id : undefined} value={typeof IsLoaded === "object" && "value" in IsLoaded ? IsLoaded?.value : IsLoaded} /* default: FrooxEngine.RawOutput`1[System.Boolean] */  isRaw={typeof IsLoaded === "object" && "isRaw" in IsLoaded && IsLoaded.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="Username-ID" id={typeof Username === "object" && "id" in Username ? Username?.id : undefined} value={typeof Username === "object" && "value" in Username ? Username?.value : Username} /* default: <i>null</i> */ readOnly isRaw={typeof Username === "object" && "isRaw" in Username && Username.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.DateTime]`} name="RegistrationDate-ID" id={typeof RegistrationDate === "object" && "id" in RegistrationDate ? RegistrationDate?.id : undefined} value={typeof RegistrationDate === "object" && "value" in RegistrationDate ? RegistrationDate?.value : RegistrationDate} /* default: 1/1/0001 12:00:00 AM */ readOnly isRaw={typeof RegistrationDate === "object" && "isRaw" in RegistrationDate && RegistrationDate.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Uri]`} name="IconURL-ID" id={typeof IconURL === "object" && "id" in IconURL ? IconURL?.id : undefined} value={typeof IconURL === "object" && "value" in IconURL ? IconURL?.value : IconURL} /* default: <i>null</i> */ readOnly isRaw={typeof IconURL === "object" && "isRaw" in IconURL && IconURL.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="IsContact-ID" id={typeof IsContact === "object" && "id" in IsContact ? IsContact?.id : undefined} value={typeof IsContact === "object" && "value" in IsContact ? IsContact?.value : IsContact} /* default: false */ readOnly isRaw={typeof IsContact === "object" && "isRaw" in IsContact && IsContact.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_loadedUserId-ID" id={typeof _loadedUserId === "object" && "id" in _loadedUserId ? _loadedUserId?.id : undefined} value={typeof _loadedUserId === "object" && "value" in _loadedUserId ? _loadedUserId?.value : _loadedUserId} /* default: <i>null</i> */ readOnly isRaw={typeof _loadedUserId === "object" && "isRaw" in _loadedUserId && _loadedUserId.isRaw ? true : undefined} />
        </Component>
      );
    };
    