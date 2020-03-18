;(function() {
    $('.monitor .tabs').on('click', 'a', function() {
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
    });
    // 克隆 marquee 里面所有的行
    $('.marquee-view .marquee').each(function() {
        let rows = $(this).children().clone();
        $(this).append(rows);
    });
})();