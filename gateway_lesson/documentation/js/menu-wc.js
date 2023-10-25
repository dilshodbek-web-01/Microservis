'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gateway documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeGatewayModule.html" data-type="entity-link" >EmployeeGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EmployeeGatewayModule-dad0acb18327208f347243b56753cc5b47f680d91c2e3e57697a8d4e6423edcef0c6d64fcb0433d0bb757f64224717071388e19f12b019e15de9e576a382a1be"' : 'data-bs-target="#xs-controllers-links-module-EmployeeGatewayModule-dad0acb18327208f347243b56753cc5b47f680d91c2e3e57697a8d4e6423edcef0c6d64fcb0433d0bb757f64224717071388e19f12b019e15de9e576a382a1be"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EmployeeGatewayModule-dad0acb18327208f347243b56753cc5b47f680d91c2e3e57697a8d4e6423edcef0c6d64fcb0433d0bb757f64224717071388e19f12b019e15de9e576a382a1be"' :
                                            'id="xs-controllers-links-module-EmployeeGatewayModule-dad0acb18327208f347243b56753cc5b47f680d91c2e3e57697a8d4e6423edcef0c6d64fcb0433d0bb757f64224717071388e19f12b019e15de9e576a382a1be"' }>
                                            <li class="link">
                                                <a href="controllers/EmployeeController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmployeeModule.html" data-type="entity-link" >EmployeeModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EmployeeModule-7bf8c17b1b064dcffd6518c398b55ae84de96534df682acd2d4b8ac879faf02807a810e14057aeca2a75f3357ae626592d471572b7d2b6b00548222a8347fb24"' : 'data-bs-target="#xs-injectables-links-module-EmployeeModule-7bf8c17b1b064dcffd6518c398b55ae84de96534df682acd2d4b8ac879faf02807a810e14057aeca2a75f3357ae626592d471572b7d2b6b00548222a8347fb24"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EmployeeModule-7bf8c17b1b064dcffd6518c398b55ae84de96534df682acd2d4b8ac879faf02807a810e14057aeca2a75f3357ae626592d471572b7d2b6b00548222a8347fb24"' :
                                        'id="xs-injectables-links-module-EmployeeModule-7bf8c17b1b064dcffd6518c398b55ae84de96534df682acd2d4b8ac879faf02807a810e14057aeca2a75f3357ae626592d471572b7d2b6b00548222a8347fb24"' }>
                                        <li class="link">
                                            <a href="injectables/EmployeeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketGatewayModule.html" data-type="entity-link" >MarketGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MarketGatewayModule-29f198da8a3de5dd8332f4ea9790b62523d2aa25bbebbca2a0c88d6b0d0e5a1fe4d8bd1bf77b86cba375cb8b29e7bcb0abb8541020c31cdaaca80189dbc9eeb8"' : 'data-bs-target="#xs-controllers-links-module-MarketGatewayModule-29f198da8a3de5dd8332f4ea9790b62523d2aa25bbebbca2a0c88d6b0d0e5a1fe4d8bd1bf77b86cba375cb8b29e7bcb0abb8541020c31cdaaca80189dbc9eeb8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MarketGatewayModule-29f198da8a3de5dd8332f4ea9790b62523d2aa25bbebbca2a0c88d6b0d0e5a1fe4d8bd1bf77b86cba375cb8b29e7bcb0abb8541020c31cdaaca80189dbc9eeb8"' :
                                            'id="xs-controllers-links-module-MarketGatewayModule-29f198da8a3de5dd8332f4ea9790b62523d2aa25bbebbca2a0c88d6b0d0e5a1fe4d8bd1bf77b86cba375cb8b29e7bcb0abb8541020c31cdaaca80189dbc9eeb8"' }>
                                            <li class="link">
                                                <a href="controllers/MarketController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketModule.html" data-type="entity-link" >MarketModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MarketModule-03780c7a83d6861812e7515afc814e51f5714579befc3d06de88db408e2ee89bdbff1851ff78fb6542dc6f7508cecbf67906c9f961721d7001be5c15acfa255c"' : 'data-bs-target="#xs-injectables-links-module-MarketModule-03780c7a83d6861812e7515afc814e51f5714579befc3d06de88db408e2ee89bdbff1851ff78fb6542dc6f7508cecbf67906c9f961721d7001be5c15acfa255c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MarketModule-03780c7a83d6861812e7515afc814e51f5714579befc3d06de88db408e2ee89bdbff1851ff78fb6542dc6f7508cecbf67906c9f961721d7001be5c15acfa255c"' :
                                        'id="xs-injectables-links-module-MarketModule-03780c7a83d6861812e7515afc814e51f5714579befc3d06de88db408e2ee89bdbff1851ff78fb6542dc6f7508cecbf67906c9f961721d7001be5c15acfa255c"' }>
                                        <li class="link">
                                            <a href="injectables/MarketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserGatewayModule.html" data-type="entity-link" >UserGatewayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' : 'data-bs-target="#xs-controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' :
                                            'id="xs-controllers-links-module-UserGatewayModule-8a7e425e2b627df49ac431590a5d7cf466c891b799c9033f2575fa963da619054a65ace86d47e14dd97169e20a8e8b86459fbf788d6ada8e7cd8df074325da4b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' : 'data-bs-target="#xs-injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' :
                                        'id="xs-injectables-links-module-UserModule-578012a994268e56e2cd09f6239138eec551140c787f3b194bf785602417e3d075e5bc5837e55e1d6efda387f073b3874666784848b8519d0278e8eda58a55d5"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/EmployeeController.html" data-type="entity-link" >EmployeeController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MarketController.html" data-type="entity-link" >MarketController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/EmployeeRetrieveAllJobResponsetDto.html" data-type="entity-link" >EmployeeRetrieveAllJobResponsetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmployeeRetrieveAllResponsetDto.html" data-type="entity-link" >EmployeeRetrieveAllResponsetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarketRetrieveAllResponseDto.html" data-type="entity-link" >MarketRetrieveAllResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInResponseDto.html" data-type="entity-link" >SignInResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpResponseDto.html" data-type="entity-link" >SignUpResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyAccessInterceptor.html" data-type="entity-link" >VerifyAccessInterceptor</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EmployeeService.html" data-type="entity-link" >EmployeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarketService.html" data-type="entity-link" >MarketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppConfig.html" data-type="entity-link" >AppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmployeeCreateRequest.html" data-type="entity-link" >EmployeeCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmployeeRetrieveAllJobResponse.html" data-type="entity-link" >EmployeeRetrieveAllJobResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmployeeRetrieveAllRequest.html" data-type="entity-link" >EmployeeRetrieveAllRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmployeeRetrieveAllResponse.html" data-type="entity-link" >EmployeeRetrieveAllResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmployeeServiceOptions.html" data-type="entity-link" >EmployeeServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketCreateRequest.html" data-type="entity-link" >MarketCreateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketCreateResponse.html" data-type="entity-link" >MarketCreateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketDeleteRequest.html" data-type="entity-link" >MarketDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketRetrieveAllRequest.html" data-type="entity-link" >MarketRetrieveAllRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketRetrieveAllResponse.html" data-type="entity-link" >MarketRetrieveAllResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketServiceOptions.html" data-type="entity-link" >MarketServiceOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketUpdateRequest.html" data-type="entity-link" >MarketUpdateRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInRequest.html" data-type="entity-link" >SignInRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignInResponse.html" data-type="entity-link" >SignInResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpRequest.html" data-type="entity-link" >SignUpRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SignUpResponse.html" data-type="entity-link" >SignUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SwaggerOptions.html" data-type="entity-link" >SwaggerOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserServiceOptions.html" data-type="entity-link" >UserServiceOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});