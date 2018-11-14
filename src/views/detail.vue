<template>
    <section>
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-hidden-touch is-1-desktop">
                    <div class="card-left">
                        <div class="badge-button badge animated bounceInLeft button-1" data-badge="1,530">
                            <span class="icon is-large">
                                <i class="fas fa-heart"></i>
                            </span>
                        </div>
                        <div class="badge-button badge animated bounceInLeft button-2" data-badge="2,470">
                            <span class="icon is-large">
                                <i class="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="column is-full-tablet is-8-desktop">
                    <div class="card animated bounceInUp">
                        <div class="card-top">
                            <div class="card-img img1"></div>
                        </div>
                        <div class="card-area" v-html="content">
                        </div>
                    </div>
                </div>
                <div class="column is-hidden-touch is-3-desktop">
                    <div class="columns is-multiline">
                        <div class="column">
                            <div class="card pic-1 animated bounceInRight">
                                <div class="card-box">
                                    <img src="https://pic.iishoni.com/p9.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-multiline">
                        <div class="column">
                            <div class="card pic-2 animated bounceInRight">
                                <div class="card-box">
                                    <img src="https://pic.iishoni.com/p10.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns is-multiline">
                <div class="column is-hidden-touch is-1-desktop"></div>
                <div class="column is-full-tablet is-8-desktop">
                    <div class="card animated bounceInUp">
                        <div class="card-comment">
                            <mavon-editor v-model="value"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                value: '',
                content: '<h1 class="ql-align-center"><span class="ql-font-serif"\n' +
                '                                                              style="color: rgb(255, 255, 255); background-color: rgb(240, 102, 102);"> I am Example 1! </span>\n' +
                '                            </h1>\n' +
                '                            <p><br></p>\n' +
                '                            <p><span class="ql-font-serif">W Can a man still be brave if he\'s afraid? That is the only time a man can be brave. </span>\n' +
                '                            </p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><strong class="ql-size-large ql-font-serif">Courage and folly is </strong><strong\n' +
                '                                    class="ql-size-large ql-font-serif"\n' +
                '                                    style="color: rgb(230, 0, 0);">always</strong><strong\n' +
                '                                    class="ql-size-large ql-font-serif"> just a fine line.</strong></p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><u class="ql-font-serif">There is only one God, and his name is Death. And there is only\n' +
                '                                one thing we say to Death: "Not today."</u></p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><em class="ql-font-serif">Fear cuts deeper than swords.</em></p>\n' +
                '                            <p><br></p>\n' +
                '                            <pre class="ql-syntax" spellcheck="false">\n' +
                'import com.iishoni.usercenter.service.AdminService;\n' +
                'import com.iishoni.usercenterapi.api.Urls;\n' +
                'import com.iishoni.usercenterapi.model.Admin;\n' +
                'import com.iishoni.web.view.Page;\n' +
                'import com.iishoni.web.view.ResponseVo;\n' +
                'import io.swagger.annotations.Api;\n' +
                'import io.swagger.annotations.ApiOperation;\n' +
                'import org.springframework.web.bind.annotation.*;\n' +
                '\n' +
                'import javax.annotation.Resource;\n' +
                '\n' +
                '@RestController\n' +
                '@RequestMapping(Urls.Admin.ROOT)\n' +
                '@Api("用户接口")\n' +
                'public class AdminController {\n' +
                '\n' +
                '    @Resource\n' +
                '    private AdminService adminService;\n' +
                '\n' +
                '    @ApiOperation("分页获取用户列表")\n' +
                '    @GetMapping(Urls.Admin.GET_ADMIN_LIST)\n' +
                '    public ResponseVo getAdminList(\n' +
                '            @RequestParam Long pageNum,\n' +
                '            @RequestParam Long pageSize) {\n' +
                '        Page result = adminService.getAdminsByPage(pageNum, pageSize);\n' +
                '        return new ResponseVo<>(result);\n' +
                '    }\n' +
                '\n' +
                '    @ApiOperation("根据id查询用户信息")\n' +
                '    @GetMapping(Urls.Admin.GET_ADMIN_BY_ID)\n' +
                '    public ResponseVo getAdminById(@PathVariable Long adminId) {\n' +
                '        Admin result = adminService.getAdminById(adminId);\n' +
                '        return new ResponseVo<>(result);\n' +
                '    }\n' +
                '\n' +
                '    @ApiOperation("根据用户名密码查询用户信息")\n' +
                '    @GetMapping(Urls.Admin.GET_ADMIN_BY_PROFILE)\n' +
                '    public ResponseVo getAdminByProfile(@RequestParam String uname, @RequestParam String pwd) {\n' +
                '        Admin result = adminService.getAdminByProfile(uname, pwd);\n' +
                '        return new ResponseVo<>(result);\n' +
                '    }\n' +
                '\n' +
                '    @ApiOperation("保存用户")\n' +
                '    @PostMapping(Urls.Admin.SAVE_ADMIN)\n' +
                '    public ResponseVo saveAdmin(@RequestBody Admin admin) {\n' +
                '        adminService.saveAdmin(admin);\n' +
                '        return new ResponseVo();\n' +
                '    }\n' +
                '\n' +
                '    @ApiOperation("更新用户")\n' +
                '    @PutMapping(Urls.Admin.UPDATE_ADMIN)\n' +
                '    public ResponseVo updateAdmin(@PathVariable Long adminId, @RequestBody Admin admin) {\n' +
                '        admin.setId(adminId);\n' +
                '        adminService.updateAdmin(admin);\n' +
                '        return new ResponseVo();\n' +
                '    }\n' +
                '\n' +
                '    @ApiOperation("删除用户")\n' +
                '    @DeleteMapping(Urls.Admin.DELETE_ADMIN)\n' +
                '    public ResponseVo deleteAdmin(@PathVariable Long adminId) {\n' +
                '        adminService.deleteAdmin(adminId);\n' +
                '        return new ResponseVo();\n' +
                '    }\n' +
                '}\n' +
                '                            </pre>\n' +
                '                            <p><br></p>\n' +
                '                            <p><span class="ql-font-serif">Every flight begins with a fall.</span></p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><a href="https://surmon.me/" target="_blank" class="ql-size-small ql-font-serif"\n' +
                '                                  style="color: rgb(230, 0, 0);"><u>A ruler who hides behind paid executioners soon\n' +
                '                                forgets what death is. </u></a></p>\n' +
                '                            <p><br><br></p>\n' +
                '                            <p><span class="ql-font-serif">Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</span>\n' +
                '                            </p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><span class="ql-font-serif">We are born to suffer, to suffer can make us strong.</span>\n' +
                '                            </p>\n' +
                '                            <p><br></p>\n' +
                '                            <p><span class="ql-font-serif">The things we love destroy us every time.</span></p>',

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "~bulma/sass/utilities/_all";
    @import "~bulma-badge/dist/css/bulma-badge";

    section {
        padding: 3rem 0
    }

    .img1 {
        background: url("https://pic.iishoni.com/p2.jpg") no-repeat center center;
    }

    .card-left {
        position: fixed;
        /*top: 35rem;*/

        .badge-button {
            position: relative;
            margin-bottom: .75rem;
            width: 3rem;
            height: 3rem;
            background: #fff no-repeat 50%;
            border-radius: 50%;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
            cursor: pointer;
            border: 1px solid #999;
        }

        .button-2 {
            animation-delay: .1s;
        }
        .button-3 {
            animation-delay: .2s;
        }
        .button-4 {
            margin-top: 50px;
            animation-delay: .3s;
        }
        .button-5 {
            animation-delay: .4s;
        }
        .button-6 {
            animation-delay: .5s;
        }
    }

    .card {
        margin: 10px;
        border-radius: 20px;
        background-color: #fff;
        transition: all .2s ease-out;
        box-shadow: 0 2px 43px -4px rgba(0, 0, 0, .19);

        &:hover {
            transform: translateY(2px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1), 0 1px 2px rgba(0, 0, 0, .05);
        }

        .card-top {
            position: relative;
            padding-top: 70%;

            .card-img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-size: 100% 100%;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
            }
        }

        .card-area {
            position: relative;
            padding: 30px;
        }

        .card-box {
            padding: 20px;
        }

        &.pic-2 {
            animation-delay: .2s;
        }

        .card-comment {
            padding: 30px;
        }
    }

</style>