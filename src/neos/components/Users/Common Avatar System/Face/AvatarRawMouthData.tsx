import { member, Member, Component } from "../../../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface AvatarRawMouthDataInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
DataSource?: member<any>;
StrengthMultiplier?: member<number>;
Jaw?: member<any>;
JawOpen?: member<any>;
Tongue?: member<any>;
TongueRoll?: member<any>;
LipUpperLeftRaise?: member<any>;
LipUpperRightRaise?: member<any>;
LipLowerLeftRaise?: member<any>;
LipLowerRightRaise?: member<any>;
LipUpperHorizontal?: member<any>;
LipLowerHorizontal?: member<any>;
MouthLeftSmileFrown?: member<any>;
MouthRightSmileFrown?: member<any>;
MouthPout?: member<any>;
LipTopOverturn?: member<any>;
LipBottomOverturn?: member<any>;
LipTopOverUnder?: member<any>;
LipBottomOverUnder?: member<any>;
CheekLeftPuffSuck?: member<any>;
CheekRightPuffSuck?: member<any>;
    }
    
    export function AvatarRawMouthData(props: AvatarRawMouthDataInput){
      const { id, persistentId, updateOrder, Enabled,
DataSource,
StrengthMultiplier,
Jaw,
JawOpen,
Tongue,
TongueRoll,
LipUpperLeftRaise,
LipUpperRightRaise,
LipLowerLeftRaise,
LipLowerRightRaise,
LipUpperHorizontal,
LipLowerHorizontal,
MouthLeftSmileFrown,
MouthRightSmileFrown,
MouthPout,
LipTopOverturn,
LipBottomOverturn,
LipTopOverUnder,
LipBottomOverUnder,
CheekLeftPuffSuck,
CheekRightPuffSuck, } = props;
    
      return (
        <Component type="FrooxEngine.CommonAvatar.AvatarRawMouthData" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.IMouthTrackingSourceComponent]`} name="DataSource" id={typeof DataSource === "object" && "id" in DataSource ? DataSource?.id : undefined} value={typeof DataSource === "object" && "value" in DataSource ? DataSource?.value : DataSource} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.Single]`} name="StrengthMultiplier" id={typeof StrengthMultiplier === "object" && "id" in StrengthMultiplier ? StrengthMultiplier?.id : undefined} value={typeof StrengthMultiplier === "object" && "value" in StrengthMultiplier ? StrengthMultiplier?.value : StrengthMultiplier} /* default: 0 */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float3]`} name="Jaw" id={typeof Jaw === "object" && "id" in Jaw ? Jaw?.id : undefined} value={typeof Jaw === "object" && "value" in Jaw ? Jaw?.value : Jaw} /* default: FrooxEngine.RawOutput`1[BaseX.float3] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="JawOpen" id={typeof JawOpen === "object" && "id" in JawOpen ? JawOpen?.id : undefined} value={typeof JawOpen === "object" && "value" in JawOpen ? JawOpen?.value : JawOpen} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[BaseX.float3]`} name="Tongue" id={typeof Tongue === "object" && "id" in Tongue ? Tongue?.id : undefined} value={typeof Tongue === "object" && "value" in Tongue ? Tongue?.value : Tongue} /* default: FrooxEngine.RawOutput`1[BaseX.float3] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="TongueRoll" id={typeof TongueRoll === "object" && "id" in TongueRoll ? TongueRoll?.id : undefined} value={typeof TongueRoll === "object" && "value" in TongueRoll ? TongueRoll?.value : TongueRoll} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipUpperLeftRaise" id={typeof LipUpperLeftRaise === "object" && "id" in LipUpperLeftRaise ? LipUpperLeftRaise?.id : undefined} value={typeof LipUpperLeftRaise === "object" && "value" in LipUpperLeftRaise ? LipUpperLeftRaise?.value : LipUpperLeftRaise} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipUpperRightRaise" id={typeof LipUpperRightRaise === "object" && "id" in LipUpperRightRaise ? LipUpperRightRaise?.id : undefined} value={typeof LipUpperRightRaise === "object" && "value" in LipUpperRightRaise ? LipUpperRightRaise?.value : LipUpperRightRaise} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipLowerLeftRaise" id={typeof LipLowerLeftRaise === "object" && "id" in LipLowerLeftRaise ? LipLowerLeftRaise?.id : undefined} value={typeof LipLowerLeftRaise === "object" && "value" in LipLowerLeftRaise ? LipLowerLeftRaise?.value : LipLowerLeftRaise} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipLowerRightRaise" id={typeof LipLowerRightRaise === "object" && "id" in LipLowerRightRaise ? LipLowerRightRaise?.id : undefined} value={typeof LipLowerRightRaise === "object" && "value" in LipLowerRightRaise ? LipLowerRightRaise?.value : LipLowerRightRaise} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipUpperHorizontal" id={typeof LipUpperHorizontal === "object" && "id" in LipUpperHorizontal ? LipUpperHorizontal?.id : undefined} value={typeof LipUpperHorizontal === "object" && "value" in LipUpperHorizontal ? LipUpperHorizontal?.value : LipUpperHorizontal} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipLowerHorizontal" id={typeof LipLowerHorizontal === "object" && "id" in LipLowerHorizontal ? LipLowerHorizontal?.id : undefined} value={typeof LipLowerHorizontal === "object" && "value" in LipLowerHorizontal ? LipLowerHorizontal?.value : LipLowerHorizontal} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="MouthLeftSmileFrown" id={typeof MouthLeftSmileFrown === "object" && "id" in MouthLeftSmileFrown ? MouthLeftSmileFrown?.id : undefined} value={typeof MouthLeftSmileFrown === "object" && "value" in MouthLeftSmileFrown ? MouthLeftSmileFrown?.value : MouthLeftSmileFrown} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="MouthRightSmileFrown" id={typeof MouthRightSmileFrown === "object" && "id" in MouthRightSmileFrown ? MouthRightSmileFrown?.id : undefined} value={typeof MouthRightSmileFrown === "object" && "value" in MouthRightSmileFrown ? MouthRightSmileFrown?.value : MouthRightSmileFrown} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="MouthPout" id={typeof MouthPout === "object" && "id" in MouthPout ? MouthPout?.id : undefined} value={typeof MouthPout === "object" && "value" in MouthPout ? MouthPout?.value : MouthPout} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipTopOverturn" id={typeof LipTopOverturn === "object" && "id" in LipTopOverturn ? LipTopOverturn?.id : undefined} value={typeof LipTopOverturn === "object" && "value" in LipTopOverturn ? LipTopOverturn?.value : LipTopOverturn} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipBottomOverturn" id={typeof LipBottomOverturn === "object" && "id" in LipBottomOverturn ? LipBottomOverturn?.id : undefined} value={typeof LipBottomOverturn === "object" && "value" in LipBottomOverturn ? LipBottomOverturn?.value : LipBottomOverturn} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipTopOverUnder" id={typeof LipTopOverUnder === "object" && "id" in LipTopOverUnder ? LipTopOverUnder?.id : undefined} value={typeof LipTopOverUnder === "object" && "value" in LipTopOverUnder ? LipTopOverUnder?.value : LipTopOverUnder} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="LipBottomOverUnder" id={typeof LipBottomOverUnder === "object" && "id" in LipBottomOverUnder ? LipBottomOverUnder?.id : undefined} value={typeof LipBottomOverUnder === "object" && "value" in LipBottomOverUnder ? LipBottomOverUnder?.value : LipBottomOverUnder} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CheekLeftPuffSuck" id={typeof CheekLeftPuffSuck === "object" && "id" in CheekLeftPuffSuck ? CheekLeftPuffSuck?.id : undefined} value={typeof CheekLeftPuffSuck === "object" && "value" in CheekLeftPuffSuck ? CheekLeftPuffSuck?.value : CheekLeftPuffSuck} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
<Member type={`FrooxEngine.RawOutput\`1[System.Single]`} name="CheekRightPuffSuck" id={typeof CheekRightPuffSuck === "object" && "id" in CheekRightPuffSuck ? CheekRightPuffSuck?.id : undefined} value={typeof CheekRightPuffSuck === "object" && "value" in CheekRightPuffSuck ? CheekRightPuffSuck?.value : CheekRightPuffSuck} /* default: FrooxEngine.RawOutput`1[System.Single] */  />
        </Component>
      );
    };
    