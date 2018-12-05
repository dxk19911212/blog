<template>
    <div ref="vue-markdown-container" class="content"></div>
</template>

<script>
    import MarkdownIt from 'markdown-it'
    import mic from 'markdown-it-container'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/googlecode.css'

    export default {
        props: {
            content: {
                type: String
            }
        },
        watch: {
            content: {
                immediate: true,
                handler(val) {
                    this.$nextTick(_ => {
                        this.$refs['vue-markdown-container'].innerHTML = this.md.render(val)
                    });
                }
            }
        },
        data() {
            let md = new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return hljs.highlight(lang, str).value;
                        } catch (__) {
                        }
                    }
                    return '';
                }
            });

            return {
                md: md.use(mic, 'img', {
                        validate: function (params) {
                            return params.trim().match(/^img\s+(.*)$/);
                        },
                        render: function (tokens, idx) {
                            let m = tokens[idx].info.trim().match(/^img\s+(.*)$/);
                            if (tokens[idx].nesting === 1) {
                                return '<p><img style="border-radius: 5px" src="' + md.utils.escapeHtml(m[1]) + '">';
                            } else {
                                return '</img></p>';
                            }
                        }
                    }
                )
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>