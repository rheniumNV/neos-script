import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarNameTagAssignerInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
LabelTargets?: member<any>;
UserIdTargets?: member<any>;
ColorTargets?: member<any>;
OutlineTargets?: member<any>;
BackgroundTargets?: member<any>;
DequippedLabel?: member<any>;
    }
    
    export function AvatarNameTagAssigner(props: AvatarNameTagAssignerInput){
      const { id, persistentId, updateOrder, Enabled,
LabelTargets,
UserIdTargets,
ColorTargets,
OutlineTargets,
BackgroundTargets,
DequippedLabel, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarNameTagAssigner" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IField\`1[System.String]]`} name="LabelTargets" id={typeof LabelTargets === "object" && "id" in LabelTargets ? LabelTargets?.id : undefined} value={typeof LabelTargets === "object" && "value" in LabelTargets ? LabelTargets?.value : LabelTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IField`1[System.String]] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IField\`1[System.String]]`} name="UserIdTargets" id={typeof UserIdTargets === "object" && "id" in UserIdTargets ? UserIdTargets?.id : undefined} value={typeof UserIdTargets === "object" && "value" in UserIdTargets ? UserIdTargets?.value : UserIdTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IField`1[System.String]] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="ColorTargets" id={typeof ColorTargets === "object" && "id" in ColorTargets ? ColorTargets?.id : undefined} value={typeof ColorTargets === "object" && "value" in ColorTargets ? ColorTargets?.value : ColorTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IField`1[BaseX.color]] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="OutlineTargets" id={typeof OutlineTargets === "object" && "id" in OutlineTargets ? OutlineTargets?.id : undefined} value={typeof OutlineTargets === "object" && "value" in OutlineTargets ? OutlineTargets?.value : OutlineTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IField`1[BaseX.color]] */  />
<Member type={`FrooxEngine.SyncRefList\`1[FrooxEngine.IField\`1[BaseX.color]]`} name="BackgroundTargets" id={typeof BackgroundTargets === "object" && "id" in BackgroundTargets ? BackgroundTargets?.id : undefined} value={typeof BackgroundTargets === "object" && "value" in BackgroundTargets ? BackgroundTargets?.value : BackgroundTargets} /* default: FrooxEngine.SyncRefList`1[FrooxEngine.IField`1[BaseX.color]] */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="DequippedLabel" id={typeof DequippedLabel === "object" && "id" in DequippedLabel ? DequippedLabel?.id : undefined} value={typeof DequippedLabel === "object" && "value" in DequippedLabel ? DequippedLabel?.value : DequippedLabel} /* default: <i>null</i> */  />
        </Component>
      );
    };
    