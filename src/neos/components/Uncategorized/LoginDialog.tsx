import { member, Member, Component } from "../../core";
    
    declare global {
      namespace JSX {
        interface IntrinsicElements {
          component: any;
        }
      }
    }
    export interface LoginDialogInput {
        
        id?:string;
        persistentId?:string;
        updateOrder?:member<number>;
        Enabled?: member<boolean>;
RegisterOnly?: member<boolean>;
_interactionEnabled?: member<boolean>;
_headerText?: member<any>;
_swapRegion?: member<any>;
_username?: member<any>;
_email?: member<any>;
_emailRepeat?: member<any>;
_password?: member<any>;
_passwordRepeat?: member<any>;
_recoveryCode?: member<any>;
_rememberLogin?: member<any>;
_registerButton?: member<any>;
_ageConfirm?: member<any>;
_loginEmail?: member<any>;
    }
    
    export function LoginDialog(props: LoginDialogInput){
      const { id, persistentId, updateOrder, Enabled,
RegisterOnly,
_interactionEnabled,
_headerText,
_swapRegion,
_username,
_email,
_emailRepeat,
_password,
_passwordRepeat,
_recoveryCode,
_rememberLogin,
_registerButton,
_ageConfirm,
_loginEmail, } = props;
    
      return (
        <Component type="FrooxEngine.LoginDialog" id={id} persistentId={persistentId} updateOrder={updateOrder}>
        <Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="Enabled" id={typeof Enabled === "object" && "id" in Enabled ? Enabled?.id : undefined} value={typeof Enabled === "object" && "value" in Enabled ? Enabled?.value : Enabled} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="RegisterOnly" id={typeof RegisterOnly === "object" && "id" in RegisterOnly ? RegisterOnly?.id : undefined} value={typeof RegisterOnly === "object" && "value" in RegisterOnly ? RegisterOnly?.value : RegisterOnly} /* default: false */  />
<Member type={`FrooxEngine.Sync\`1[System.Boolean]`} name="_interactionEnabled" id={typeof _interactionEnabled === "object" && "id" in _interactionEnabled ? _interactionEnabled?.id : undefined} value={typeof _interactionEnabled === "object" && "value" in _interactionEnabled ? _interactionEnabled?.value : _interactionEnabled} /* default: false */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Text]`} name="_headerText" id={typeof _headerText === "object" && "id" in _headerText ? _headerText?.id : undefined} value={typeof _headerText === "object" && "value" in _headerText ? _headerText?.value : _headerText} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.SlideSwapRegion]`} name="_swapRegion" id={typeof _swapRegion === "object" && "id" in _swapRegion ? _swapRegion?.id : undefined} value={typeof _swapRegion === "object" && "value" in _swapRegion ? _swapRegion?.value : _swapRegion} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_username" id={typeof _username === "object" && "id" in _username ? _username?.id : undefined} value={typeof _username === "object" && "value" in _username ? _username?.value : _username} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_email" id={typeof _email === "object" && "id" in _email ? _email?.id : undefined} value={typeof _email === "object" && "value" in _email ? _email?.value : _email} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_emailRepeat" id={typeof _emailRepeat === "object" && "id" in _emailRepeat ? _emailRepeat?.id : undefined} value={typeof _emailRepeat === "object" && "value" in _emailRepeat ? _emailRepeat?.value : _emailRepeat} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_password" id={typeof _password === "object" && "id" in _password ? _password?.id : undefined} value={typeof _password === "object" && "value" in _password ? _password?.value : _password} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_passwordRepeat" id={typeof _passwordRepeat === "object" && "id" in _passwordRepeat ? _passwordRepeat?.id : undefined} value={typeof _passwordRepeat === "object" && "value" in _passwordRepeat ? _passwordRepeat?.value : _passwordRepeat} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.TextField]`} name="_recoveryCode" id={typeof _recoveryCode === "object" && "id" in _recoveryCode ? _recoveryCode?.id : undefined} value={typeof _recoveryCode === "object" && "value" in _recoveryCode ? _recoveryCode?.value : _recoveryCode} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_rememberLogin" id={typeof _rememberLogin === "object" && "id" in _rememberLogin ? _rememberLogin?.id : undefined} value={typeof _rememberLogin === "object" && "value" in _rememberLogin ? _rememberLogin?.value : _rememberLogin} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Button]`} name="_registerButton" id={typeof _registerButton === "object" && "id" in _registerButton ? _registerButton?.id : undefined} value={typeof _registerButton === "object" && "value" in _registerButton ? _registerButton?.value : _registerButton} /* default: ID0 */  />
<Member type={`FrooxEngine.SyncRef\`1[FrooxEngine.UIX.Checkbox]`} name="_ageConfirm" id={typeof _ageConfirm === "object" && "id" in _ageConfirm ? _ageConfirm?.id : undefined} value={typeof _ageConfirm === "object" && "value" in _ageConfirm ? _ageConfirm?.value : _ageConfirm} /* default: ID0 */  />
<Member type={`FrooxEngine.Sync\`1[System.String]`} name="_loginEmail" id={typeof _loginEmail === "object" && "id" in _loginEmail ? _loginEmail?.id : undefined} value={typeof _loginEmail === "object" && "value" in _loginEmail ? _loginEmail?.value : _loginEmail} /* default: <i>null</i> */  />
        </Component>
      );
    };
    