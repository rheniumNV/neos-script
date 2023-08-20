import { member, Member, Component } from "../../../core";
    
    export interface Ulong3ToUlong3SwizzleDriverInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
Source?: member<any>;
Target?: member<any>;
X?: member<number>;
Y?: member<number>;
Z?: member<number>;
    }
    
    export function Ulong3ToUlong3SwizzleDriver(props: Ulong3ToUlong3SwizzleDriverInput){
      const { id, persistentId, updateOrder, Enabled,
Source,
Target,
X,
Y,
Z, } = props;
    
      return (
        <Component type="FrooxEngine.Ulong3ToUlong3SwizzleDriver" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled ?? true} /* default: false */  isRaw={typeof Enabled === "object" && "isRaw" in Enabled && Enabled.isRaw ? true : undefined} />
<Member type={`FrooxEngine.RelayRef\`1[FrooxEngine.IField\`1[BaseX.ulong3]]`} name="Source" id={typeof Source === "object" && "id" in Source ? Source?.id : undefined} value={typeof Source === "object" && "value" in Source ? Source?.value : Source} /* default: ID0 */  isRaw={typeof Source === "object" && "isRaw" in Source && Source.isRaw ? true : undefined} />
<Member type={`FrooxEngine.FieldDrive\`1[BaseX.ulong3]`} name="Target" id={typeof Target === "object" && "id" in Target ? Target?.id : undefined} value={typeof Target === "object" && "value" in Target ? Target?.value : Target} /* default: ID0 */  isRaw={typeof Target === "object" && "isRaw" in Target && Target.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="X" id={typeof X === "object" && "id" in X ? X?.id : undefined} value={typeof X === "object" && "value" in X ? X?.value : X} /* default: 0 */  isRaw={typeof X === "object" && "isRaw" in X && X.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Y" id={typeof Y === "object" && "id" in Y ? Y?.id : undefined} value={typeof Y === "object" && "value" in Y ? Y?.value : Y} /* default: 0 */  isRaw={typeof Y === "object" && "isRaw" in Y && Y.isRaw ? true : undefined} />
<Member type={`FrooxEngine.Sync\`1[System.Int32]`} name="Z" id={typeof Z === "object" && "id" in Z ? Z?.id : undefined} value={typeof Z === "object" && "value" in Z ? Z?.value : Z} /* default: 0 */  isRaw={typeof Z === "object" && "isRaw" in Z && Z.isRaw ? true : undefined} />
        </Component>
      );
    };
    